import type { Song } from './types';

export const SONGS: Song[] = [
  // ============================================================
  // 1. КняZz — Дом манекенов
  // ============================================================
  {
    id: 'knyazz-dom-manekenov',
    title: 'Дом манекенов',
    artist: 'КняZz',
    bpm: 120,
    pattern: 'Четвёрка+',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Память вновь подвела,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Всё забыл я, плохи дела.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Каждый день жду гостей,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Только нет от них вестей.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'В своём доме вижу лишь одних' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Манекенов...' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Время замерло, как замерли они.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Не пойму, почему манекены вокруг,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я теряюсь в догадках, а там за окном' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'То ли вымерли все неожиданно вдруг,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'То ли люди обходят невзрачный мой дом.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Кем я был, кем я стал —' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Сам себе ответ не дал.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Что в душе прячет мрак —' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Одиночество, мой враг.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Кажется порой, непросто так' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Вдруг из тьмы себе я посылаю знак.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Не пойму, почему манекены вокруг,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Моё время крадёт бремя творческих мук.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Иногда снится мне, что я создал их сам,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И что люди они, но не верю я снам.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Манекены смеются, танцуют, грустят,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Что из старого дома устроил музей.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И хоть все они так добродушно глядят,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Не заменят живых, настоящих друзей!' },
        ],
      },
    ],
  },

  // ============================================================
  // 2. Dabro — Юность
  // ============================================================
  {
    id: 'dabro-yunost',
    title: 'Юность',
    artist: 'Dabro',
    bpm: 100,
    pattern: 'Шестёрка',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Знаю, мы сегодня точно не уснём.' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Знаю, будем до утра смотреть на звёзды.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Тебя греют мои руки и костёр,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Так красиво поднимает искры в воздух.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Ветер ласкает глаза, солнце уходит в закат.' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Кто был со мной до конца, с теми ни шагу назад.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'И вот мы стали сильней, но накрывает тоска,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Я соберу всех друзей и тогда...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Звук поставим на всю, и соседи не спят,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Кто под нами внизу — вы простите меня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'А потом о любви говорить до утра —' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Это юность моя, это юность моя.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Звук поставим на всю, и соседи не спят,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Кто под нами внизу — вы простите меня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'А потом о любви говорить до утра —' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Это юность моя, это юность моя.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Слышит музыку уже весь двор,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'И мы ставим это на повтор.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Ревёт мотор, катим вперёд,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'В центре уже отдыхает народ.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Эй, прибавляй звук, настежь окно,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Снова на всю из колонок Dabro.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Пара друзей, также подруг,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Не предам их и на сердце мечту.' },
        ],
      },
      {
        name: 'Бридж',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Ты просто обещай не грустить и улыбнись,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Никогда не забывай и ещё почаще снись.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Буду новой встречи ждать и скучать за блеском глаз.' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Будет всё, ну а пока давай, как в последний раз.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Звук поставим на всю, и соседи не спят,' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Кто под нами внизу — вы простите меня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'D', beats: 4 }], text: 'А потом о любви говорить до утра —' },
          { chords: [{ chord: 'Em', beats: 4 }], text: 'Это юность моя, это юность моя.' },
        ],
      },
    ],
  },

  // ============================================================
  // 3. Dabro — Ты знаешь, мам
  // ============================================================
  {
    id: 'dabro-ty-znaesh',
    title: 'Ты знаешь, мам',
    artist: 'Dabro',
    bpm: 88,
    pattern: 'Четвёрка',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Мне нужен твой совет,' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Но я не слышу ответ.' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Порой тебе лишь одному' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Виднее всех, что у меня в душе.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Ты знаешь, мам, у меня есть план:' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Я хочу оставаться собой,' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Даже через года вновь прижаться к твоим рукам.' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Ты знаешь, мам, у меня есть план:' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Делать то, что на сердце лежит,' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'И так просит душа, а ведь больше не надо нам.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Я помню твои глаза,' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'В них я вижу себя.' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Ты научила меня мечтать' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'И никогда не унывать.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Ты знаешь, мам, у меня есть план:' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Я хочу оставаться собой,' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Даже через года вновь прижаться к твоим рукам.' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Ты знаешь, мам, у меня есть план:' },
          { chords: [{ chord: 'Gm', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Делать то, что на сердце лежит,' },
          { chords: [{ chord: 'Eb', beats: 4 }, { chord: 'D', beats: 4 }], text: 'И так просит душа, а ведь больше не надо нам.' },
        ],
      },
    ],
  },

  // ============================================================
  // 4. Кукрыниксы — Никто
  // ============================================================
  {
    id: 'kukryniksy-nikto',
    title: 'Никто',
    artist: 'Кукрыниксы',
    bpm: 150,
    pattern: 'Галоп',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Жизнь и смерть во мне' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Объявили мне:' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Жизнь — игра, у тебя нет масти,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Смерть к тебе не питает страсти.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Я так не могу жить!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Тени дарить.' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Понять не успеваю.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Там-то все уже знают.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Жизнь и смерть во мне' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Объявили мне:' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Жизнь — игра, у тебя нет масти,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Смерть к тебе не питает страсти.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Я так не могу жить!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Тени дарить.' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Понять не успеваю.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'B', beats: 4 }], text: 'Там-то все уже знают.' },
        ],
      },
    ],
  },

  // ============================================================
  // 5. Спектакль Джо — Адмирал
  // ============================================================
  {
    id: 'spektakl-dzho-admiral',
    title: 'Адмирал',
    artist: 'Спектакль Джо',
    bpm: 130,
    pattern: 'Четвёрка+',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Врываясь в синь морей,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Он шёл не спеша,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И так задумчиво сжимал' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Кортик в руке.' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И ничего не жаль...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И лишь армадой кораблей' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Встречу я любую беду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Стрелять — так стрелять!' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Я не пропаду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я многих простил,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Но многих порвал!' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Зовут меня все —' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Седой Адмирал!' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Прошедши сто морей,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Я встречусь с бедой.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Но ветры шепчут мне,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Что небо со мной.' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я поднимаю флаг...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И лишь армадой кораблей' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Встречу я любую беду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Стрелять — так стрелять!' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Я не пропаду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я многих простил,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Но многих порвал!' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Зовут меня все —' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Седой Адмирал!' },
        ],
      },
      {
        name: 'Куплет 3',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Горящая звезда' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Всегда надо мной.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Как только даст мне знак —' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Так скоро мой бой.' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я не хочу войны...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Но вновь армадой кораблей' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Встречу я любую беду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Стрелять — так стрелять!' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Я не пропаду.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Я многих простил,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Но многих порвал!' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Зовут меня все —' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Седой Адмирал!' },
        ],
      },
    ],
  },

  // ============================================================
  // 6. Спектакль Джо — Гость
  // ============================================================
  {
    id: 'spektakl-dzho-gost',
    title: 'Гость',
    artist: 'Спектакль Джо',
    bpm: 155,
    pattern: 'Чак',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Куда-то бежит река,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'И я убегаю вместе с ней.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Корнями по берегам —' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Руины из сломанных людей.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Упорно дышу огнём' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'В спину идущим кораблям.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мой гений, храни меня, но...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Не дай мне забыть, что я здесь только гость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Букетом летящих планет окружённый.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Сгораю в глазах сотен губ, словно трость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Добитый дотла, только не поражённый.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Кидает по берегам,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Лупит об души дураков.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Наверное, останусь здесь,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'О нет, я не готов!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Задорный попутный клич' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Манит мечты вперёд,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мой гений меня зовёт, но...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Не дай мне забыть, что я здесь только гость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Букетом летящих планет окружённый.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Сгораю в глазах сотен губ, словно трость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Добитый дотла, только не поражённый.' },
        ],
      },
      {
        name: 'Куплет 3',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Врываюсь на всех порах' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'На театральный пьедестал,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И в блеске горящих глаз' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Сюжет мой стартовал.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Хранитель привёл меня' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'К чудесным берегам.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мой гений, храни меня, но...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Не дай мне забыть, что я здесь только гость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Букетом летящих планет окружённый.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Сгораю в глазах сотен губ, словно трость,' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Добитый дотла, только не поражённый.' },
        ],
      },
    ],
  },

  // ============================================================
  // 7. Спектакль Джо — Монах и бес
  // ============================================================
  {
    id: 'spektakl-dzho-monah-i-bes',
    title: 'Монах и бес',
    artist: 'Спектакль Джо',
    bpm: 140,
    pattern: 'Четвёрка+', 
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Em', beats: 4 }], text: 'В церквушке, что стоит в безлюдных горах,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'Молился инок в кровь, колени сбивший.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Em', beats: 4 }], text: 'Он очень добрый был и крепкий монах,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Три чаши горестей и бед испивший.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Em', beats: 4 }], text: 'И только небо здесь, свидетель ему,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'И лики слушают его страданья.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Em', beats: 4 }], text: 'Вдруг отворилась дверь и прямо к нему' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Бродяга шёл, желающий внимания.' },
        ],
      },
      {
        name: 'Бес',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Скажи мне, монах, зачем же ты здесь?' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Тебя не могу я понять.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Один среди гор свой точишь топор,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Чтоб с силами зла воевать!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Послушай меня, коль ты не глупец,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Не вздумай баланс нарушать.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Так будет всегда, так было и есть,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Не вздумай нам, парень, мешать!' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Чтоб делало твоё добро,' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Если б не стало зла?' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Всё создал мудро ваш отец небесный!' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Иди в народ, живи, резвись, веселись сполна!' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Отшельникам сегодня' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'В этом мире нету места!' },
        ],
      },
      {
        name: 'Монах',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Скажу я тебе, хозяин теней,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Смелый монах отвечал.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Тебя я узнал, давно раскусил —' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Ты зверь от начала начал!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Не стоит тебе меня поучать,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Я слушаю только отца!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Он создал закон, и вера моя' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'E', beats: 4 }], text: 'Всё доведёт до конца!' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Чтоб делало твоё добро,' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Если б не стало зла?' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Всё создал мудро ваш отец небесный!' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Иди в народ, живи, резвись, веселись сполна!' },
          { chords: [{ chord: 'F', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Отшельникам сегодня' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'В этом мире нету места!' },
        ],
      },
    ],
  },

  // ============================================================
  // 8. Кино — Видели ночь
  // ============================================================
  {
    id: 'kino-videli-noch',
    title: 'Видели ночь',
    artist: 'Кино',
    bpm: 130,
    pattern: 'Шестёрка',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мы вышли из дома,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Когда во всех окнах' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Погасли огни,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Один за одним.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мы видели, как уезжает' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Последний трамвай.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Ездят такси,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Но нам нечем платить,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И нам незачем ехать,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Мы гуляем одни.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Видели ночь,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Гуляли всю ночь до утра.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Видели ночь,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Гуляли всю ночь до утра.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Зайди в телефонную будку,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Скажи, чтоб закрыли дверь' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'В квартире твоей,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Сними свою обувь —' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мы будем ходить босиком.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Есть сигареты, спички,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Бутылка вина, и она...' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Что все спят,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И мы здесь вдвоём.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Видели ночь,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Гуляли всю ночь до утра.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Видели ночь,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Гуляли всю ночь до утра.' },
        ],
      },
    ],
  },

  // ============================================================
  // 9. Кино — Звезда по имени Солнце
  // ============================================================
  {
    id: 'kino-zvezda-po-imeni-solnce',
    title: 'Звезда по имени Солнце',
    artist: 'Кино',
    bpm: 105,
    pattern: 'Шестёрка',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Белый снег, серый лёд' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'На растрескавшейся земле.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Одеялом лоскутным на ней —' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Город в дорожной петле.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'А над городом плывут облака,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Закрывая небесный свет.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'А над городом — жёлтый дым.' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Городу две тысячи лет,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Прожитых под светом звезды' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'По имени Солнце.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'И две тысячи лет — война,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Война без особых причин.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Война — дело молодых,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Лекарство против морщин.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Красная-красная кровь —' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Через час уже просто земля,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Через два на ней цветы и трава,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Через три она снова жива.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И согрета лучами звезды' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'По имени Солнце.' },
        ],
      },
      {
        name: 'Куплет 3',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'И мы знаем, что так было всегда:' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Что судьбою больше любим,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Кто живёт по законам другим' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И кому умирать молодым.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Он не помнит слова «да» и слова «нет»,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Он не помнит ни чинов, ни имён.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'И способен дотянуться до звёзд,' },
          { chords: [{ chord: 'Dm', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Не считая, что это сон.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И упасть, опалённым звездой' },
          { chords: [{ chord: 'E', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'По имени Солнце.' },
        ],
      },
    ],
  },

  // ============================================================
  // 10. Кино — Кукушка
  // ============================================================
  {
    id: 'kino-kukushka',
    title: 'Кукушка',
    artist: 'Кино',
    bpm: 90,
    pattern: 'Испанский',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Песен ещё не написанных сколько?' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'Скажи, кукушка, пропой.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'В городе мне жить или на выселках,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'Камнем лежать или гореть звездой?' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Звездой...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Солнце моё, взгляни на меня,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Моя ладонь превратилась в кулак.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И если есть порох, дай огня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Вот так!' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Кто пойдёт по следу одинокому?' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'Сильные да смелые головы сложили в поле, в бою.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Мало кто остался в светлой памяти,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'В трезвом уме да с твёрдой рукой в строю.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'В строю...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Солнце моё, взгляни на меня,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Моя ладонь превратилась в кулак.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И если есть порох, дай огня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Вот так!' },
        ],
      },
      {
        name: 'Куплет 3',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Где же ты теперь, воля вольная,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'С кем же ты сейчас ласковый рассвет встречаешь? Ответь!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Хорошо с тобой да плохо без тебя.' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'Dm', beats: 4 }], text: 'Голову да плечи терпеливые под плеть.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'C', beats: 4 }], text: 'Под плеть...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'Солнце моё, взгляни на меня,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Моя ладонь превратилась в кулак.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'F', beats: 4 }], text: 'И если есть порох, дай огня.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Вот так!' },
        ],
      },
    ],
  },

  // ============================================================
  // 11. Nagart — Шкатулка
  // ============================================================
  {
    id: 'nagart-shkatulka',
    title: 'Шкатулка',
    artist: 'Nagart',
    bpm: 140,
    pattern: 'Галоп',
    sections: [
      {
        name: 'Куплет 1',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Славный мальчик умирал,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Шкатулку к сердцу прижимал.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Лишь мелодия внутри' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Заглушала боль в груди.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Сердца вышел его срок,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Могилу укрывал снежок.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Он лежит теперь в горах' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Со шкатулкою в руках.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Северный ветер расскажет тебе:' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'F#', beats: 4 }], text: 'Лютая нежить живёт за горами,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Слышит мелодию в мёрзлой земле —' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Она управляет мертвецами.' },
        ],
      },
      {
        name: 'Куплет 2',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Холод проникал в могилу,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Механизм разжал пружину,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Музыку нечистых сил' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'В полночь ветер разносил!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Колокол в груди звенел,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Тысячи истлевших тел' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Окружили мертвеца' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Со шкатулкой вместо сердца.' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Северный ветер расскажет тебе:' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'F#', beats: 4 }], text: 'Лютая нежить живёт за горами,' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Слышит мелодию в мёрзлой земле —' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Она управляет мертвецами.' },
        ],
      },
      {
        name: 'Куплет 3',
        lines: [
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Нет покоя вам, ни сна,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Пока музыка слышна,' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Проникайте вы в жильё' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'И найдите мне моё!' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Музыка с ветром по миру плывёт.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Мама парня слёзы льёт.' },
          { chords: [{ chord: 'Am', beats: 4 }, { chord: 'Bm', beats: 4 }], text: 'Как его похоронила,' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'G', beats: 4 }], text: 'Сердце у себя хранила...' },
        ],
      },
      {
        name: 'Припев',
        lines: [
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Музыка с ветром по миру плывёт,' },
          { chords: [{ chord: 'Em', beats: 4 }, { chord: 'F#', beats: 4 }], text: 'Она мертвецов из земли поднимает.' },
          { chords: [{ chord: 'G', beats: 4 }, { chord: 'D', beats: 4 }], text: 'Кто её слышит — тот скоро умрёт.' },
          { chords: [{ chord: 'C', beats: 4 }, { chord: 'Am', beats: 4 }], text: 'Люди бесследно пропадают!' },
        ],
      },
    ],
  },
];