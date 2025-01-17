import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postPengajuan } from "../../redux";
import { useNavigate } from "react-router-dom";

const FormPengajuan = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.postPengajuan);
  const navigate = useNavigate()
  const [form, setForm] = useState({
    maksud_per: "",
    instansi_tujuan: "",
    noHpkepalaOPD: "",
    SPTSP: null,
    SKCPNS: null,
    SKPNS: null,
    SKPT: null,
    SPT: null,
    SKPP: null,
    SPTDP: null,
  });

  const [filePreviews, setFilePreviews] = useState({
    SPTSP: null,
    SKCPNS: null,
    SKPNS: null,
    SKPT: null,
    SPT: null,
    SKPP: null,
    SPTDP: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];
      setForm({
        ...form,
        [name]: file, // Store the file in the state
      });

      // Create a preview for the file
      if (file.type.startsWith("image/")) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFilePreviews({
            ...filePreviews,
            [name]: reader.result, // Store the image preview URL
          });
        };
        reader.readAsDataURL(file);
      } else {
        setFilePreviews({
          ...filePreviews,
          [name]: file.name, // Store the file name for non-image files
        });
      }
    } else {
      setForm({
        ...form,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a FormData object to handle file uploads
    const formData = new FormData();
    formData.append("maksud_per", form.maksud_per);
    formData.append("instansi_tujuan", form.instansi_tujuan);
    formData.append("noHpkepalaOPD", form.noHpkepalaOPD);
    formData.append("SPTSP", form.SPTSP);
    formData.append("SKCPNS", form.SKCPNS);
    formData.append("SKPNS", form.SKPNS);
    formData.append("SKPT", form.SKPT);
    formData.append("SPT", form.SPT);
    formData.append("SKPP", form.SKPP);
    formData.append("SPTDP", form.SPTDP);
  
    // Log the FormData object for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    // Dispatch the form data to the Redux store
    dispatch(postPengajuan(formData,(responseStatus)=>{
      if(responseStatus === 201){
        navigate("/pages/user/dashboard")
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Form Pengajuan
        </h2>

        <form onSubmit={handleSubmit}>
          {/* Text Inputs */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Maksud Tujuan
              </label>
              <input
                type="text"
                name="maksud_per"
                value={form.maksud_per}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama Maksud Tujuan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Instansi Tujuan
              </label>
              <input
                type="text"
                name="instansi_tujuan"
                value={form.instansi_tujuan}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan Instansi Tujuan"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                No. HP Kepala OPD
              </label>
              <input
                type="number"
                name="noHpkepalaOPD"
                value={form.noHpkepalaOPD}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan No. HP Kepala OPD"
              />
            </div>
          </div>

          {/* File Upload Inputs */}
          {[
            {
              label:
                "Rekomendasi/Surat Pengantar Kepala Perangkat Daerah",
              name: "SPTSP",
            },
            {
              label: "Surat Keterangan Tidak ada Permasalahan Terkait Keuangan dan Aset Dari Kepala Perangkat Daerah/Kepala Biro",
              name: "SKCPNS",
            },
            {
              label: "Keputusan Pangkat Terakhir",
              name: "SKPNS",
            },
            {
              label: "Keputusan Jabatan Terakhir",
              name: "SKPT",
            },
            {
              label:
                "Sasaran Kinerja Pegawai (SKP) Terakhir",
              name: "SPT",
            }
           
          ].map((field, index) => (
            <div key={index} className="mt-8">
              <label className="block text-sm font-medium text-gray-700">
                {field.label}
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  {filePreviews[field.name] ? (
                    field.name.startsWith("image/") ? (
                      <img
                        src={filePreviews[field.name]}
                        alt="Preview"
                        className="h-24 w-24 object-cover mx-auto"
                      />
                    ) : (
                      <p className="text-sm text-gray-600">
                        {filePreviews[field.name]}
                      </p>
                    )
                  ) : (
                    <>
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor={`file-upload-${field.name}`}
                          className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
                        >
                          <span>Choose a file</span>
                          <input
                            id={`file-upload-${field.name}`}
                            name={field.name}
                            type="file"
                            onChange={handleChange}
                            className="sr-only"
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500">
                        PDF, max size: 2MB
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Submit Button */}
          <div className="mt-8">
            <p className="font-bold">
              Pastikan semua input dan file sudah benar !!!
            </p>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormPengajuan;
