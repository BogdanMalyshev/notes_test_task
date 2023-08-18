import React from "react";
// import reactStringReplace from "react-string-replace";
import { NotesListModule } from "modules/NotesListModule";
import { CreateNoteModule } from "modules/CreateNoteModule";

export const NotesPage = () => {
  // const [message, setMessage] = useSt  ate<string>("")
  // const [tags, setTags] = useState<string[] | null>([])

  // const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
  //   const value = e.target.value;
  //   const tags = value.match(/#(\w+)/g)
  //   setMessage(value)
  //   setTags(tags)
  // }

  // const replacedText = reactStringReplace(message, /#(\w+)/g, (match, i) => (
  //   <a key={match + i} style={{ color: "blue" }}>#{match}</a>
  // ));

  return (
    <>
      <CreateNoteModule />
      <NotesListModule />
    </>
  );
};
