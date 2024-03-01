class DialogueNode {
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
}

class DialogueGraph {
    nodes: DialogueNode[];

    constructor() {
        this.nodes = [];
    }

    addDialogueNode(message: string, type: DialogueType = DialogueType.Message) {
        const node = new DialogueNode(message, type);
        this.nodes.push(node);
    }

    addEdge(source: DialogueNode, destination: DialogueNode, weight: number = 0) {
        source.addNeighbor(destination, weight);
    }
}

enum DialogueType {
    Message,
    Option
}
