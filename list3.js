// List integrated with detail view
//
var imgUser = Synchro.getResourceUrl("user.png");

exports.InitializeViewModel = function(context, session, params, state)
{
    var viewModel = state;
    if (viewModel == null)
    {
        viewModel = { isLoading: true };
    }
    else if (session.updatedPerson)
    {
        viewModel.people[session.updatedPerson.index] = session.updatedPerson.person;
        delete session.updatedPerson;
    }

    return viewModel;
}

exports.LoadViewModel = function * (context, session, viewModel)
{
    if (viewModel.people === undefined)
    {
        yield Synchro.yieldAwaitable(context, function(callback){ setTimeout(callback, 4000) });
        viewModel.people = [
             { first: "Betsy", last: "Braddock" }, 
             { first: "Steven", last: "Rogers" }, 
             { first: "Natasha", last: "Romanoff" }, 
             { first: "Tony", last: "Stark" }, 
             { first: "Wade", last: "Wilson" }, 
        ];
        viewModel.isLoading = false;
    }
}

exports.View =
{
    title: "List 3",
    elements:
    [
        { control: "stackpanel", orientation: "Vertical", visibility: "{isLoading}", contents: [
            { control: "progressring", value: "{isLoading}", verticalAlignment: "Center" },
            { control: "text", value: "Loading...", foreground: "Red", font: { size: 24, bold: true }, verticalAlignment: "Center" },
        ] },
        { control: "stackpanel", orientation: "Vertical", width: "*", contents: [
            { control: "listview", select: "None", width: "*", 
              binding: { items: "people", onItemClick: { command: "onSelected", person: "{$data}", index: "{$index}" } }, 
              itemTemplate:
                { control: "stackpanel", orientation: "Horizontal", width: "*", padding: 5, contents: [
                    { control: "image", resource: imgUser, height: 50, width: 50, verticalAlignment: "Center" },
                    { control: "stackpanel", orientation: "Vertical", contents: [
                        { control: "text", value: "{first}" },
                        { control: "text", value: "{last}" },
                    ] },
                ] },
            },
        ] },
    ]
}

exports.Commands = 
{
    onSelected: function (context, session, viewModel, params)
    {
        return Synchro.pushAndNavigateTo(context, "hello8", params, viewModel);
    },
}
