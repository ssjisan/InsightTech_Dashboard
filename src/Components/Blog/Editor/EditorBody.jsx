import { Box } from '@mui/material'
import { useState } from 'react'
import "./editor.css";
import { Editor } from "@tinymce/tinymce-react";

export default function EditorBody() {
    const [content, setContent] = useState("");
    //eslint-disable-next-line
    const handleEditorChange = (content, editor) => {
        setContent(content);
    };
    console.log(content);

    return (
        <Box sx={{ mt: 5 }}>
                <Editor
                    apiKey="v7as0vfh00q2lduke0dy1supgsfv1j2yv11u6steulyqergo"
                    onEditorChange={handleEditorChange}
                    init={{
                        placeholder:
                            "Write something creative",
                        height: 500,
                        menubar: false,
                        statusbar: false,
                        plugins: [
                            "advlist autolink lists link image charmap print preview anchor",
                            "searchreplace visualblocks code fullscreen",
                            "insertdatetime media table paste code help wordcount",
                            "underline",
                            "strikethrough",
                            "lists",
                        ],
                        toolbar: "bold italic underline strikethrough | bullist numlist",
                        content_style:
                            "body { font-family:Helvetica,Arial,sans-serif; font-size:14px; font-weight:500 }",
                    }}
                />
        </Box>
    )
}
