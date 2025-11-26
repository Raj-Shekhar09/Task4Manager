export default function DeletePopup({ onClose, onConfirm }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-96 animate-fadeIn">

        <div className="flex items-center gap-3 mb-4">
          <span className="text-red-500 text-2xl">⚠</span>
          <h2 className="text-xl font-semibold">Delete</h2>
        </div>

        <p className="text-gray-600 mb-6">Are you sure you want to delete?</p>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="border px-5 py-2 rounded-full hover:bg-gray-100"
          >
            Delete
          </button>

          <button
            onClick={onConfirm}
            className="bg-purple-700 text-white px-5 py-2 rounded-full hover:bg-purple-800"
          >
            Confirm
          </button>
        </div>

      </div>
    </div>
  );
}
