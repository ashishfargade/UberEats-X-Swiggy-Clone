import React from "react";
import {AwesomeButton} from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import './NewButton.css';


export function NewButton(prop) {
  return <div className="text-2xl font-bold">
        
    What do want to see:

        <span className="px-9">
            <AwesomeButton type="primary" className="w-40 " onPressed={()=> {}}>
                {prop.name1}
            </AwesomeButton>
        </span>

        <span>
            <AwesomeButton type="primary" className="w-40 " onPressed={()=> {}}>
                {prop.name2}
            </AwesomeButton>
        </span>
    </div>
}
