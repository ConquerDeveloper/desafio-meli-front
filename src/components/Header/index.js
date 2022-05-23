export default function Header({title}) {
    console.log('title', title);
    return <>
        <head>
            <title>{title}</title>
        </head>
    </>;
}