import {DialogueGraph, DialogueType} from '@/models/DialogueGraph'

export class DialogueGraphConstructor {
    private _dialogueGraph = new DialogueGraph();

    get dialogueGraph(): DialogueGraph {
        return this._dialogueGraph;
    }
    
    constructDialogue() {
        this.dialogueGraph.addDialogueNode('How can I help you?');
        this.dialogueGraph.addDialogueNode('Where can I find...');
        this.dialogueGraph.addDialogueNode('The manager', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('The shoes', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('The returns', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('Please follow me');
        this.dialogueGraph.addDialogueNode('OK Karen');
        this.dialogueGraph.addDialogueNode('What did you just say?'); //7
        this.dialogueGraph.addDialogueNode('Nothing...');
        this.dialogueGraph.addDialogueNode('I need to speak to...');
        this.dialogueGraph.addDialogueNode('Your boss', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('Never mind', DialogueType.Option); //11
        this.dialogueGraph.addDialogueNode('Your mom', DialogueType.Option);
        this.dialogueGraph.addDialogueNode('Huh?');

        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[0], this.dialogueGraph.nodes[1]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[2]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[3]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[1], this.dialogueGraph.nodes[4]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[2], this.dialogueGraph.nodes[6]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[3], this.dialogueGraph.nodes[5]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[4], this.dialogueGraph.nodes[5]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[6], this.dialogueGraph.nodes[7]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[7], this.dialogueGraph.nodes[8]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[8], this.dialogueGraph.nodes[9]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[9], this.dialogueGraph.nodes[10]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[9], this.dialogueGraph.nodes[2]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[10], this.dialogueGraph.nodes[6]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[11], this.dialogueGraph.nodes[0]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[9], this.dialogueGraph.nodes[12]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[12], this.dialogueGraph.nodes[13]);
        this.dialogueGraph.addEdge(this.dialogueGraph.nodes[13], this.dialogueGraph.nodes[11]);

        this.dialogueGraph.setCurrentNode(this.dialogueGraph.nodes[0]);
    }
}