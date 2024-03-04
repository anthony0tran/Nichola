export class DialogueNode {
    type: DialogueType;
    message: string;
    neighbors: {
        node: DialogueNode;
        stats: EdgeStatistics
    }[];

    constructor(message: string, type: DialogueType) {
        this.type = type;
        this.message = message;
        this.neighbors = [];
    }

    addNeighbor(node: DialogueNode, stats: EdgeStatistics) {
        this.neighbors.push({ node, stats });
    }

    getNextDialogue(): {node: DialogueNode, stats: EdgeStatistics} | null {
        var result = this.neighbors
            .find(n => n.node.type == DialogueType.Message);

        return result ? result : null;
    }

    getOptions(): DialogueNode[] {
        return this.neighbors
            .filter(n => n.node.type == DialogueType.Option)
            .map(n => n.node);
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

    addEdge(source: DialogueNode, destination: DialogueNode, stats: EdgeStatistics) {
        source.addNeighbor(destination, stats);
    }

    setCurrentNode(node: DialogueNode) {
        this.currentNode = node;
    }
}

export enum DialogueType {
    Message,
    Option
}

export class EdgeStatistics {
    creativity: number;
    knowledge: number;
    skill: number;

    constructor(creativity: number = 1, knowledge: number = 1, skill: number = 1) {
        this.creativity = creativity;
        this.knowledge = knowledge;
        this.skill = skill;
    }
}
