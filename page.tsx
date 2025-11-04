import ProfileHeader from "../../components/HeaderProfile";
import AttendanceCard from "../../components/indexprresensi";
import Calendar from "../../components/page";
import ProgressCard from "../../components/indexpresen";
import AttendanceHistory from "../../components/indexriwayat";

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center p-6">
      {/* Header */}
      <div className="w-[80%] max-w-6xl mx-auto">
        <ProfileHeader />
      </div>

      <div className="w-[80%] max-w-6xl mt-10 flex justify-between items-start gap-10">
        {/* Kartu Presensi */}
        <div className="flex-shrink-0">
          <AttendanceCard />
        </div>

        {/* Riwayat */}
        <div className="flex-1">
          <AttendanceHistory />
        </div>

        {/* Kalender dan Progress (dalam satu kolom) */}
        <div className="flex flex-col gap-6">
          <Calendar />
          <ProgressCard />
        </div>
      </div>
    </main>
  );
}
