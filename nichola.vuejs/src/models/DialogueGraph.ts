export class DialogueNode {
    type: DialogueType;
    message: string;
    neighbors: { node: DialogueNode; weight: number }[];

    constructor(message: string, type: DialogueType) {
        this.type = type;
        this.message = message;
        this.neighbors = [];
    }

    addNeighbor(node: DialogueNode, weight: number) {
        this.neighbors.push({ node, weight });
    }

    getOptions() {
        return this.neighbors
            .filter(n => n.node.type == DialogueType.Option)
            .map(n => n.node.message);
    }
}

export class DialogueGraph {
    nodes: DialogueNode[];
    currentNode: DialogueNode | null = null;

    constructor() {
        this.nodes = [];
    }

    get getCurrentNode(): DialogueNode | null {
        return this.currentNode
    }

    addDialogueNode(message: string, type: DialogueType = DialogueType.Message) {
        const node = new DialogueNode(message, type);
        this.nodes.push(node);
    }

    addEdge(source: DialogueNode, destination: DialogueNode, weight: number = 0) {
        source.addNeighbor(destination, weight);
    }

    setCurrentNode(node: DialogueNode) {
        this.currentNode = node;
    }
}

export enum DialogueType {
    Message,
    Option
}
