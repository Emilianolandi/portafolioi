interface ContainerProps{
    children:React.ReactNode
}

const ContainerPage = (props: ContainerProps) => {
    const { children } = props

    return (
        <div className="Container-Pag">
            {children}
        </div>
    );
}

export default ContainerPage;
