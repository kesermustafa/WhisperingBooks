// eslint-disable-next-line react/prop-types
const Container = ({children, designs }) => {
    return (
        <div className={`${designs} max-w-[1240px] mx-auto`}>
            {children}

        </div>
    )
}

export default Container;