import { MagnifyingGlass } from "react-loader-spinner";


export function RenderLoading(props: {isLoading: boolean}) {
    if(props.isLoading) {
        console.log("Carregando...");
        return (
            <MagnifyingGlass
                visible={true}
                height="80"
                width="80"
                ariaLabel="magnifying-glass-loading"
                wrapperStyle={{}}
                wrapperClass="magnifying-glass-wrapper"
                glassColor="#c0efff"
                color="#e15b64"
            />
        );
    }
    console.log("Carregado!")
    return null
}