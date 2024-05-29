// import { put } from '@vercel/blob';
// import { NextResponse } from 'next/server';
 
// export async function POST(request: Request): Promise<NextResponse> {
//   const { searchParams } = new URL(request.url);
//   const filename = searchParams.get('filename');

//   if (filename === null) {
//     throw new Error('filename is required');
//   }

//   if (request.body === null) {
//     throw new Error('Request is required');
//   }
 
//   const blob = await put(filename, request.body, {
//     access: 'public',
//   });
 
//   return NextResponse.json(blob);
// }








import { handleUpload, type HandleUploadBody } from '@vercel/blob/client';
import { NextResponse } from 'next/server';
import { addProductImage } from '@/app/lib/action';
import { loadEnvConfig } from '@next/env';


export async function POST(request: Request): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody;
  

  try {
    console.log(process.env.BLOB_READ_WRITE_TOKEN);
    //const token = 'vercel_blob_rw_OBN4BxFMc3wjm5TO_D0WLOYOEKTVZzADLzuKbkH2HriZHlU';
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async (pathname, clientPayload) => {
        // Generate a client token for the browser to upload the file
        const token = "vercel_blob_rw_OBN4BxFMc3wjm5TO_D0WLOYOEKTVZzADLzuKbkH2HriZHlU"
        // ⚠️ Authenticate and authorize users before generating the token.
        // Otherwise, you're allowing anonymous uploads.

        
        

        let payload = null
        let product_id = null;
        let alt_text = null;

        if (clientPayload !== null) {
          payload = JSON.parse(clientPayload);
          product_id = payload.product_id;
          alt_text = payload.alt_text;
        }
        return {
          allowedContentTypes: ['image/jpeg', 'image/png', 'image/gif'],
          tokenPayload: JSON.stringify({
            // optional, sent to your server on upload completion
            // you could pass a user id from auth, or a value from clientPayload
            product_id,
            alt_text,
          }),
        };
      },
      onUploadCompleted: async ({ blob, tokenPayload }) => {
        // Get notified of client upload completion
        // ⚠️ This will not work on `localhost` websites,
        // Use ngrok or similar to get the full upload flow

        console.log('blob upload completed', blob, tokenPayload);
        let tokenPayloadObj = null;
        if (tokenPayload) {
          tokenPayloadObj = JSON.parse(tokenPayload);
        }
        let product_id = tokenPayloadObj.product_id;
        let alt_text = tokenPayloadObj.alt_text;
        let image_file = blob.url;

        try {
          // Run any logic after the file upload completed
          // const { userId } = JSON.parse(tokenPayload);
          // await db.update({ avatar: blob.url, userId });
          await addProductImage(product_id, alt_text, image_file);
          alert('Image uploaded successfully');
        } catch (error) {
          throw new Error('Could not update user');
        }
      },
    });

    return NextResponse.json(jsonResponse);
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 } // The webhook will retry 5 times waiting for a 200
    );
  }
}
