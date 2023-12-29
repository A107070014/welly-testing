// 第一種
function ConditionalRendering({ isLoggedIn }) {
    // 實作你的條件渲染
    if (!isLoggedIn) return <p>尚未登入</p>
    return (
        <p>已登入</p>
    )
}



// 第二種
function ConditionalRendering({ isLoggedIn }) {
    // 實作你的條件渲染
    return (
        <>
            {isLoggedIn ? <ComponentOne /> : <Component2 />}
        </>
    )
}
