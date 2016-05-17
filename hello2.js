// View populated from ViewModel:
//
exports.InitializeViewModel = function(context, session)
{
    return {
        userName: "Jane Smith"
    };
}

exports.View = {
    title: "Hello World 2",
    elements: [
        { control: "text", value: "Hello {userName}" }
    ]
};