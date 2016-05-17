// List view from static array
//
var imgUser = Synchro.getResourceUrl("user.png");

exports.View =
{
    title: "List 1",
    elements:
    [
        { control: "stackpanel", orientation: "Vertical", width: "*", contents: [
            { control: "listview", select: "Single", height: "*", width: "*", binding: "people", itemTemplate:
                { control: "stackpanel", orientation: "Horizontal", width: "*", padding: 5, contents: [
                    { control: "image", resource: imgUser, height: 50, width: 50 },
                    { control: "stackpanel", orientation: "Vertical", contents: [
                        { control: "text", value: "{first}" },
                        { control: "text", value: "{last}" },
                    ] },
                ] },
            },
        ] },
    ]
}

exports.InitializeViewModel = function(context, session, params, state)
{
    return {
        people: [
             { first: "Betsy", last: "Braddock" }, 
             { first: "Steven", last: "Rogers" }, 
             { first: "Natasha", last: "Romanoff" }, 
             { first: "Tony", last: "Stark" }, 
             { first: "Wade", last: "Wilson" }, 
        ],
    }
}