
const KEY = '__jest-combinator__';

const getNodes = (node, nodes = []) => {
    if (typeof node === 'object') {
        nodes.push(node)
    }

    if (node.children) {
        Array.from(node.children).forEach(child => getNodes(child, nodes))
    }

    return nodes
}

const markNodes = nodes => nodes.forEach(node => (node[KEY] = true))

const serializer = {
    test(val) {
        return (
            val &&
            !val[KEY] &&
            (val.$$typeof === Symbol.for('react.test.json') ||
                (global.Element && val instanceof global.Element))
        )
    },

    print(val, print) {
        console.log(val);
        const nodes = getNodes(val);
        markNodes(nodes);
        return print(val);
    },
};

module.exports = serializer;
