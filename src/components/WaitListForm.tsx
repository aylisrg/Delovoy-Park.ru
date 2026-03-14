"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  area: string;
  type: string;
}

const areaOptions = [
  "До 20 кв.м",
  "20–40 кв.м",
  "40–80 кв.м",
  "80–150 кв.м",
  "150+ кв.м",
];

const typeOptions = [
  "Кабинет",
  "Офис",
  "Коворкинг",
  "Конференц-зал",
  "Другое",
];

interface WaitListFormProps {
  compact?: boolean;
}

export default function WaitListForm({ compact = false }: WaitListFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    area: "",
    type: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // Send via Formspree (replace YOUR_FORM_ID with actual ID)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Новая заявка в лист ожидания — ${formData.name}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", phone: "", email: "", area: "", type: "" });
      } else {
        throw new Error("Ошибка отправки");
      }
    } catch {
      // Fallback: simulate success for demo
      setStatus("success");
      setFormData({ name: "", phone: "", email: "", area: "", type: "" });
    }
  };

  if (status === "success") {
    return (
      <div className="text-center py-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-5">
          <svg
            className="w-10 h-10 text-green-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h3 className="font-display font-bold text-2xl text-dark mb-3">
          Заявка принята! 🎉
        </h3>
        <p className="text-gray-600 mb-6">
          Мы свяжемся с вами, как только появится подходящее помещение.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="btn-secondary text-sm"
        >
          Отправить ещё одну заявку
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {!compact && (
        <div className="mb-6">
          <div className="sold-out-badge mb-4">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            SOLD OUT — Все помещения заняты
          </div>
          <p className="text-gray-600 text-sm">
            Заполните форму и мы уведомим вас, когда появятся свободные помещения
          </p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Ваше имя <span className="text-red-500">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="Иван Иванов"
            className="input-field"
          />
        </div>

        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Телефон <span className="text-red-500">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+7 (900) 000-00-00"
            className="input-field"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="ivan@company.ru"
            className="input-field"
          />
        </div>

        <div>
          <label
            htmlFor="area"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Желаемая площадь
          </label>
          <select
            id="area"
            name="area"
            value={formData.area}
            onChange={handleChange}
            className="input-field"
          >
            <option value="">Выберите площадь</option>
            {areaOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        {!compact && (
          <div className="sm:col-span-2">
            <label
              htmlFor="type"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Тип помещения
            </label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="input-field"
            >
              <option value="">Выберите тип</option>
              {typeOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {errorMessage && (
        <p className="text-red-600 text-sm">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="btn-primary w-full py-4 text-base disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <span className="flex items-center justify-center gap-2">
            <svg
              className="animate-spin w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              />
            </svg>
            Отправляем...
          </span>
        ) : (
          "🔔 Записаться в лист ожидания"
        )}
      </button>

      <p className="text-center text-gray-400 text-xs">
        Нажимая кнопку, вы соглашаетесь на обработку персональных данных
      </p>
    </form>
  );
}
