class DialogueHelpers {
    static constructDialogue() {
        var dialogueGraph = new DialogueGraph();
        dialogueGraph.addDialogueNode('Hi! How can I help you?');
        dialogueGraph.addDialogueNode('Where can I find...');
        dialogueGraph.addDialogueNode('The manager', DialogueType.Option);
        dialogueGraph.addDialogueNode('The shoes', DialogueType.Option);
        dialogueGraph.addDialogueNode('The returns', DialogueType.Option);

        dialogueGraph.addEdge(dialogueGraph.nodes[0], dialogueGraph.nodes[1]);
        dialogueGraph.addEdge(dialogueGraph.nodes[1], dialogueGraph.nodes[2]);
        dialogueGraph.addEdge(dialogueGraph.nodes[1], dialogueGraph.nodes[3]);
        dialogueGraph.addEdge(dialogueGraph.nodes[1], dialogueGraph.nodes[4]);
    }
}