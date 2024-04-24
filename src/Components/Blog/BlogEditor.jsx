import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
// import SimpleImage from "@editorjs/simple-image";
import { Box } from '@mui/material';
import List from '@editorjs/list';

export default function BlogEditor() {
    const editor = new EditorJS({
        holder: 'editorjs',
        tools: {
            header: Header,
            // image: SimpleImage,
            list: List,
        },
    });
    const handleSave = ()=>{
        editor.save().then((outputData) => {
            console.log('Article data: ', outputData)
        }).catch((error) => {
            console.log('Saving failed: ', error)
        });
    }
    return (
        <>
            <div id="editorjs">
            </div>
            <button onClick={handleSave}>Save</button>
        </>
    )
}
