import { ReactComponent as HOME_ICON } from '../assets/icon/home.svg'
import { ReactComponent as SEARCH_ICON } from '../assets/icon/search.svg'
import { ReactComponent as CHAT_ICON } from '../assets/icon/chat.svg'
import { ReactComponent as PEARSON_ICON } from '../assets/icon/person.svg'
import { ReactComponent as PLUS_ICON } from '../assets/icon/plus.svg'

export default function BottomNav({ onPlusClick }) {
  return (
    <footer className="fixed bottom-0 bg-white w-full h-16 border-t">
      <nav className="flex items-center justify-around text-gray-500 h-full">
        <button className="p-4" >
          <HOME_ICON className="w-4" />
        </button>

        <button className="p-4" >
          <SEARCH_ICON className="w-4" />
        </button>

        <button className="p-4" className="px-6 py-3 rounded-2xl text-white"
          style={{
            background: `linear-gradient(#FF00D6, #FF4D00)`,
          }}
          onClick={onPlusClick}
        >
          <PLUS_ICON className="w-4" />
        </button>

        <button className="p-4" >
          <CHAT_ICON className="w-4" />
        </button>

        <button className="p-4" >
          <PEARSON_ICON className="w-3" />
        </button>

      </nav>
    </footer>
  );
}