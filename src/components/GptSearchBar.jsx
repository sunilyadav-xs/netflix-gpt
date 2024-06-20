import { useSelector } from 'react-redux';
import lang from '../utils/languageConstants'

const GptSearchBar = () => {
  const language = useSelector(store => store.config?.selectedLanguage);
  return (
    <div className="pt-[5%] flex justify-center">
       <form className="w-1/2 bg-black grid grid-cols-12">
        <input type="text" className="p-4 m-4 rounded-lg col-span-8" placeholder={lang[language]?.placeholder}/>
        <button className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-4">{lang[language]?.search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar;
