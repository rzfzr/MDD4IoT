import GoClass from "../components/GoClass";
import paletteNodes from "../paletteNodes";

export default function ModelsPage() {

    const defaultNodes: any[] = [
        { key: -1, name: 'MicroController' },
        { key: -2, name: 'Arduino' },
        { key: -3, name: 'Component' },
    ]
    const defaultLinks: any[] = [
        { key: -2, from: -2, to: -1, relationship: "generalization" },
        { key: -3, from: -3, to: -1, relationship: "generalization" },
    ]
    let nodesStatic: any[] = [...defaultNodes]
    let linksStatic: any[] = [...defaultLinks]
    let nodesDynamic: any[] = []
    let linksDynamic: any[] = []

    paletteNodes.forEach((node, index) => {
        let methods: any[] = []
        node.methods?.forEach(method => {
            methods.push({ name: method, visibility: 'public' })
        });
        node.ins?.forEach(method => {
            methods.push({ name: method, visibility: 'public' })
        });
        node.outs?.forEach(method => {
            methods.push({ name: method, visibility: 'public' })
        });

        let parsedNode = {
            key: index,
            name: node.name,
            methods: methods
            // properties:
        }


        nodesStatic.push(parsedNode)


        if (node.extras.type === 'controller') {
            linksStatic.push({ key: index, from: index, to: -2, relationship: "generalization" })
            // linksDynamic.push({ key: index, from: index, to: -2, relationship: "generalization" })
        } else {

            const sD = 1000
            const eD = 2000
            const cD = 3000




            nodesDynamic.push({ key: index + cD, name: 'MicroController' })
            linksDynamic.push({ key: index + cD, from: index + sD, to: index + cD, text: "relation", relationship: "generalization" })
            nodesDynamic.push({ key: index + sD, category: "Start" })
            linksDynamic.push({ key: index + sD, from: index + cD, to: index, text: "relation", relationship: "generalization" })
            nodesDynamic.push(parsedNode)
            linksDynamic.push({ key: index + eD, from: index, to: index + eD, text: "relation", relationship: "generalization" })
            nodesDynamic.push({ key: index + eD, category: "End" })
        }

    });

    return <>
        <GoClass linkdata={linksStatic} nodedata={nodesStatic} />
        <GoClass linkdata={linksDynamic} nodedata={nodesDynamic} />
    </>
}