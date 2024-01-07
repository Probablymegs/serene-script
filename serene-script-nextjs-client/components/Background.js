export default function Background(props) {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                backgroundImage: 'url("/landscape-background.webp")',
            }}
        >
            {props.children}
        </div>
    );
}
