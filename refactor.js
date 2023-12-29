function formatName(firstName, lastName) {
    // 原始程式碼中，
    // 如果 firstName 或 lastName 為 undefined、null 或空字符串，
    // 則不會添加到 formattedName。
    // 重構後的程式碼使用邏輯或 || 操作符來達到相同的目的。
    // 如果 firstName 或 lastName 不存在，
    // 則自動使用空字符串替代。
    const first = firstName || '';
    const last = lastName || '';

    return first + " " + last
}
console.log(formatName("May", "Li"))
