import '../Comp/EmojiDisplay.css'
import "./Emojipedia"
import EntryEmoji from './EntryEmoji';
import emojipedia from './Emojipedia';

export const EmojiDisplay = (props) => {

    
    const funcemoji = (oneemoji) => {
        return (<EntryEmoji key={oneemoji.id} emoji={oneemoji.emoji} name={oneemoji.name} meaning={oneemoji.meaning}></EntryEmoji>);
    }
    return (
        <div>
            <h1>
                <span>Emojipedia</span>
            </h1>
            <dl className="dictionary">
                {emojipedia.map(funcemoji)}
            </dl>
        </div>
    );
};