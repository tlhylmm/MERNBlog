import ReactQuill from "react-quill";

//a text editor for create and edit post page
export default function Editor({ value, onChange }) {
    const modules = {
        toolbar: [
            [{ header: [1, 2, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
                { list: 'ordered' },
                { list: 'bullet' },
                { indent: '-1' },
                { indent: '+1' },
            ],
            ['link', 'image'],
            ['clean'],
        ],
    };
    return (
        <div className="content">
            <ReactQuill
                value={value}
                theme={'snow'}
                onChange={onChange}
                modules={modules} />
        </div>
    );
}