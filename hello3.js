// View dynamically updated from ViewModel
//
exports.InitializeViewModel = function(context, session)
{
    return {
        userName: "Jane Smith"
    };
}

exports.View = {
    title: "Hello World 3",
    elements: [
        { control: "edit", binding: "userName", placeholder: "enter name" },
        { control: "text", value: "Hello {userName}", visibility: "{userName}" }
    ]
};
