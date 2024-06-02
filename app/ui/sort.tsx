"use client"

import React from 'react';

export default function Sort(){

    return (
        <div className="grid rounded-lg border-4 p-4">
            <form>
                <h4>Sort</h4>
                <select name="" id="" onChange={(e) => sortItems(e.target.value)}>
                    <option value="high-to-low">Price - High to Low</option>
                    <option value="low-to-high">Price - Low to High</option>
                </select>
            </form>
        </div>
    )
}