import React from "react";
import Entry from './Entry';
import emoji from '../emoji';


function createEntry(emojiTerm){
    return(
        <Entry
        key={emojiTerm.id}
        emoji={emojiTerm.emoji}
        name={emojiTerm.name}
        description={emojiTerm.meaning}
        />
    );
}

function App(){
    return(
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>
            <dl className="dictionary">{emoji.map(createEntry)}</dl>
        </div>
    );
}



export default App;
