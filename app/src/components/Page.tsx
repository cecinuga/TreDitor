import { ReactElement, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router";
import DemoPage from "./DemoPage";
import EditorPage from "./EditorPage";
import { getStyle } from "../lib/lib";
import { useQuery } from "react-query";

type PageProps = {
    children: ReactElement
}

export default function Page(props: PageProps){

    return(
        <Suspense fallback={null}>
            {props.children}
        </Suspense>
    )
}