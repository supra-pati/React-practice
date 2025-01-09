
const EntryEmoji = (props) => {

    //destructing of props see next line
    // -> instead of props we can write {emoji,name,meaning} in line 2 for destructure
    //    const { emoji, name, meaning } = props;
    //    console.log(name);

    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img">
                    {props.emoji}
                    {/* use of destructure props*/}
                    {/* {emoji} */}
                </span>
                <span>
                    {props.name}
                    {/* use of destructure props*/}
                    {/* {name} */}
                </span>
            </dt>
            <dd>
                {props.meaning}
                {/* use of destructure props*/}
                {/* {meaning} */}
            </dd>
        </div>
    );
};

export default EntryEmoji;