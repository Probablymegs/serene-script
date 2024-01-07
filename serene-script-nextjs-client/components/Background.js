export default function Background(props) {
    return (
        <div
            style={{
                backgroundImage: 'url("/landscape-background.webp")',
                backgroundAttachment: "fixed",
                minHeight: "100vh",
                backgroundSize: "cover",
            }}
        >
            {props.children}
        </div>
    );
}
