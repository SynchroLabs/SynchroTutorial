// Tutorial menu page
//
exports.View =
{
    title: "Synchro Tutorial",
    elements: 
    [
        { control: "stackpanel", width: "*", contents: [
            { control: "button", caption: "{caption}", binding: { foreach: "pages", command: "goToView", view: "{view}" } },
        ] }
    ]
}

exports.InitializeViewModel = function (context, session)
{
    var viewModel =
    {
        pages: [
            { caption: "Hello World 1", view: "hello1" },
            { caption: "Hello World 2", view: "hello2" },
            { caption: "Hello World 3", view: "hello3" },
            { caption: "Hello World 4", view: "hello4" },
            { caption: "Hello World 5", view: "hello5" },
            { caption: "Hello World 6", view: "hello6" },
            { caption: "Hello World 7", view: "hello7" },
            { caption: "List 1", view: "list1" },
            { caption: "List 2", view: "list2" },
            { caption: "List 3", view: "list3" },
        ]
    }
    return viewModel;
}

exports.Commands = 
{
    goToView: function(context, session, viewModel, params)
    {
        return Synchro.pushAndNavigateTo(context, params.view);
    },
}
