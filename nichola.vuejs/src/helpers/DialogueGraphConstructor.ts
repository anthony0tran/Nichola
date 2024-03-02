import {DialogueGraph, DialogueType} from '@/models/DialogueGraph'

export class DialogueGraphConstructor {
    private _dialogueGraph = new DialogueGraph();

    get dialogueGraph(): DialogueGraph {
        return this._dialogueGraph;
    }
    
    constructDialogue() {
        this.dialogueGraph.addDialogueNode('Hi! How can I help you?');
        this.dialogueGraph.addDialogueNode('Where can I find...');
        this.dialogueGraph.addDialogueNode('The manager', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('The shoes', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('The returns', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('Please follow me');
        this.dialogueGraph.addDialogueNode('OK Karen');

        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[0], this.dialogueGraph.nodes[1]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[2]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[3]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[4]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[2], this.dialogueGraph.nodes[6]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[3], this.dialogueGraph.nodes[5]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[4], this.dialogueGraph.nodes[5]);

        this.dialogueGraph.setCurrentNode(this.dialogueGraph.nodes[0]);
    }
}