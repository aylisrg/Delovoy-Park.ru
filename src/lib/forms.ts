// Эндпоинты форм (Formspree). ID счётчиков задаются через окружение
// (NEXT_PUBLIC_FORMSPREE_*) и инлайнятся в статический билд.
// Если ID не задан — endpoint пустой, и форма честно показывает ошибку
// с предложением связаться напрямую (а не фейковый «success»).

const WAITLIST_ID = process.env.NEXT_PUBLIC_FORMSPREE_WAITLIST_ID;
const CONTACT_ID = process.env.NEXT_PUBLIC_FORMSPREE_CONTACT_ID;

export const WAITLIST_ENDPOINT = WAITLIST_ID
  ? `https://formspree.io/f/${WAITLIST_ID}`
  : "";

export const CONTACT_ENDPOINT = CONTACT_ID
  ? `https://formspree.io/f/${CONTACT_ID}`
  : "";
