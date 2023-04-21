import { ReactElement } from "react";

type LoaderFullScreenTextProps = {
    children: ReactElement | string;
}

export default function Loader(props: LoaderFullScreenTextProps){

    return(
        <>
            <div className="text-center mt-10 font-primary fs-1 fs-1-sm  text-white">{props.children}</div>
            <div className="position-relative w-100 h-4px bg-white"></div>
        </>
    )
}