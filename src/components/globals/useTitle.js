import React, {useState} from 'react';

export default function useTitle(title){
    document.title = title;
}