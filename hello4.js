// View that executes command
//
exports.InitializeViewModel = function(context, session)
{
    return {
        userName: "Jane Smith"
    };
}

exports.View = {
    title: "Hello World 4",
    elements: [
        { control: "edit", binding: "userName", placeholder: "enter name" },
        { control: "text", value: "Hello {userName}", visibility: "{userName}" },
        { control: "button", caption: "Submit", binding: "onSubmit", enabled: "{userName}" }
    ]
};

exports.Commands =
{
    onSubmit: function(context, session, viewModel)
    {
        Synchro.showMessage(context, {
            title: "Hello World",
            message: "User name: " + viewModel.userName
        });
    }
}