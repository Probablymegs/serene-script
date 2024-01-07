//component that returns a wrapper div with a background image and allows for children elements to be passed in

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
