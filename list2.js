// List view with asynchronous loading
//
var imgUser = Synchro.getResourceUrl("user.png");

exports.InitializeViewModel = function(context, session, params, state)
{
    return {
        isLoading: true
    }
}

exports.LoadViewModel = function * (context, session, viewModel)
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

exports.View =
{
    title: "List 2",
    elements:
    [
        { control: "stackpanel", orientation: "Vertical", visibility: "{isLoading}", contents: [
            { control: "progressring", value: "{isLoading}", verticalAlignment: "Center" },
            { control: "text", value: "Loading...", foreground: "Red", font: { size: 24, bold: true }, verticalAlignment: "Center" },
        ] },
        { control: "stackpanel", orientation: "Vertical", width: "*", visibility: "{!isLoading}", contents: [
            { control: "listview", select: "None", width: "*", binding: "people", itemTemplate:
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