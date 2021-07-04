import EditorJS from "react-editor-js";

const Editor = () => {
  const handleChange = ({ api, newData }) => {
    console.log(api);
    // console.log(newData);
  };

  return <EditorJS data="testing" onChange={handleChange} />;
};

export { Editor };
