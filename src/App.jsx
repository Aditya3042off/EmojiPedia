import React from "react";
import emojipedia from "./emojipedia";
import Entry from "./Entry";

var createEntry = (entry) => {
  return (
    <Entry
      key={entry.id}
      emoj={entry.emoji}
      emojName={entry.name}
      emojMeaning={entry.meaning}
    />
  );
};

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEntry)}</dl>
    </div>
  );
}

export default App;
