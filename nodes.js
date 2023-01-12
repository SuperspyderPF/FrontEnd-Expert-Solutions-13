var countSubTrees = function(n, edges, labels) {
    const children = new Array(n)

    for (let i = 0; i < n; i++) {
        children[i] = []
    }

    for (const edge of edges) {
        children[edge[0]].push(edge[1])
        children[edge[1]].push(edge[0])
    }

    const result = new Array(n)
    const dfs = (index, parent) => {
        const map = {}

        for (const child of children[index]) {
            if (child === parent) continue

            const childMap = dfs(child, index)

            for (const [label, value] of Object.entries(childMap)) {
                if (!map[label]) map[label] = 0
                
                map[label] += value
            }
        }

        if (!map[labels[index]]) map[labels[index]] = 0

        map[labels[index]]++
        result[index] = map[labels[index]]

        return map
    }

    dfs(0)

    return result
};