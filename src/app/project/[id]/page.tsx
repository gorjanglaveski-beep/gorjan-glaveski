import ProjectDetailPage from '@/featured/pages/ProjectDetailPage/ProjectDetailPage'
import { getProjectIds } from '@/lib/getProjects'

export function generateStaticParams() {
  return getProjectIds().map((id) => ({ id }))
}

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <ProjectDetailPage id={id} />
}
