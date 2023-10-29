import Link from "next/link";
export default function PageNotFound() {
    return (
        <div>
            <h1 style={{textAlign: "center", paddingTop: "20px",}}>NO PAGE FOUND 😱</h1>
            <h3 style={{textAlign: "center", paddingTop: "20px",}}>Return to <Link href="/">home page</Link></h3>
        </div>
    );
}