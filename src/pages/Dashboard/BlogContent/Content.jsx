import JoditEditor from "jodit-react";

const Content = ({ placeholder, editor, content , setContent}) => {
  
//   const config = {
//     placeholder: "Start typings ....",
//   };

  return (
    <JoditEditor
      ref={editor}
      value={content}
    //   config={config}
      onChange={(newContent) => setContent(newContent)}
    />
  );
};

export default Content;
