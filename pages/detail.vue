<template>
	<div class="min-h-full">
		<main class="py-10">
			<!-- Page header -->
			<div class="mx-auto max-w-3xl px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
				<div class="flex items-center space-x-5">
					<div class="shrink-0">
						<div class="relative">
							<img
								class="size-16 rounded-full"
								src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80"
								alt=""
							>
							<span
								class="absolute inset-0 rounded-full shadow-inner"
								aria-hidden="true"
							/>
						</div>
					</div>
					<div>
						<h1 class="text-2xl font-bold text-gray-900">
							Ricardo Cooper
						</h1>
						<p class="text-sm font-medium text-gray-500">
							Applied for <a
								href="#"
								class="text-gray-900"
							>Front End Developer</a> on <time datetime="2020-08-25">August 25, 2020</time>
						</p>
					</div>
				</div>
				<div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-3 sm:space-y-0 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
					>
						Disqualify
					</button>
					<button
						type="button"
						class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
					>
						Advance to offer
					</button>
				</div>
			</div>

			<div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
				<div class="space-y-6 lg:col-span-2 lg:col-start-1">
					<!-- Description list -->
					<section aria-labelledby="applicant-information-title">
						<div class="bg-white shadow sm:rounded-lg">
							<div class="px-4 py-5 sm:px-6">
								<h2
									id="applicant-information-title"
									class="text-lg/6 font-medium text-gray-900"
								>
									Applicant Information
								</h2>
								<p class="mt-1 max-w-2xl text-sm text-gray-500">
									Personal details and application.
								</p>
							</div>
							<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
								<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">
											Application for
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											Backend Developer
										</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">
											Email address
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											ricardocooper@example.com
										</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">
											Salary expectation
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											$120,000
										</dd>
									</div>
									<div class="sm:col-span-1">
										<dt class="text-sm font-medium text-gray-500">
											Phone
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											+1 555-555-5555
										</dd>
									</div>
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">
											About
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
										</dd>
									</div>
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">
											Attachments
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											<ul
												role="list"
												class="divide-y divide-gray-200 rounded-md border border-gray-200"
											>
												<li
													v-for="attachment in attachments"
													:key="attachment.name"
													class="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
												>
													<div class="flex w-0 flex-1 items-center">
														<PaperClipIcon
															class="size-5 shrink-0 text-gray-400"
															aria-hidden="true"
														/>
														<span class="ml-2 w-0 flex-1 truncate">{{ attachment.name }}</span>
													</div>
													<div class="ml-4 shrink-0">
														<a
															:href="attachment.href"
															class="font-medium text-blue-600 hover:text-blue-500"
														>Download</a>
													</div>
												</li>
											</ul>
										</dd>
									</div>
								</dl>
							</div>
							<div>
								<a
									href="#"
									class="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 sm:rounded-b-lg"
								>Read full application</a>
							</div>
						</div>
					</section>

					<!-- Comments -->
					<section aria-labelledby="notes-title">
						<div class="bg-white shadow sm:overflow-hidden sm:rounded-lg">
							<div class="divide-y divide-gray-200">
								<div class="px-4 py-5 sm:px-6">
									<h2
										id="notes-title"
										class="text-lg font-medium text-gray-900"
									>
										Notes
									</h2>
								</div>
								<div class="px-4 py-6 sm:px-6">
									<ul
										role="list"
										class="space-y-8"
									>
										<li
											v-for="comment in comments"
											:key="comment.id"
										>
											<div class="flex space-x-3">
												<div class="shrink-0">
													<img
														class="size-10 rounded-full"
														:src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
														alt=""
													>
												</div>
												<div>
													<div class="text-sm">
														<a
															href="#"
															class="font-medium text-gray-900"
														>{{ comment.name }}</a>
													</div>
													<div class="mt-1 text-sm text-gray-700">
														<p>{{ comment.body }}</p>
													</div>
													<div class="mt-2 space-x-2 text-sm">
														<span class="font-medium text-gray-500">{{ comment.date }}</span>
														{{ ' ' }}
														<span class="font-medium text-gray-500">&middot;</span>
														{{ ' ' }}
														<button
															type="button"
															class="font-medium text-gray-900"
														>
															Reply
														</button>
													</div>
												</div>
											</div>
										</li>
									</ul>
								</div>
							</div>
							<div class="bg-gray-50 px-4 py-6 sm:px-6">
								<div class="flex space-x-3">
									<div class="shrink-0">
										<img
											class="size-10 rounded-full"
											:src="user.imageUrl"
											alt=""
										>
									</div>
									<div class="min-w-0 flex-1">
										<form action="#">
											<div>
												<label
													for="comment"
													class="sr-only"
												>About</label>
												<textarea
													id="comment"
													name="comment"
													rows="3"
													class="block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm/6"
													placeholder="Add a note"
												/>
											</div>
											<div class="mt-3 flex items-center justify-between">
												<a
													href="#"
													class="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-900"
												>
													<QuestionMarkCircleIcon
														class="size-5 shrink-0 text-gray-400 group-hover:text-gray-500"
														aria-hidden="true"
													/>
													<span>Some HTML is okay.</span>
												</a>
												<button
													type="submit"
													class="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
												>
													Comment
												</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</main>
	</div>
</template>

<script setup>
import {
	PaperClipIcon,
	QuestionMarkCircleIcon,
} from '@heroicons/vue/20/solid';

import { useProjectStore } from '~/store/project.state';

const projectStore = useProjectStore();

console.log('current project:', projectStore.getCurrentProject);

const user = {
	name: 'Whitney Francis',
	email: 'whitney@example.com',
	imageUrl:
    'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80',
};
const attachments = [
	{ name: 'resume_front_end_developer.pdf', href: '#' },
	{ name: 'coverletter_front_end_developer.pdf', href: '#' },
];
const comments = [
	{
		id: 1,
		name: 'Leslie Alexander',
		date: '4d ago',
		imageId: '1494790108377-be9c29b29330',
		body: 'Ducimus quas delectus ad maxime totam doloribus reiciendis ex. Tempore dolorem maiores. Similique voluptatibus tempore non ut.',
	},
	{
		id: 2,
		name: 'Michael Foster',
		date: '4d ago',
		imageId: '1519244703995-f4e0f30006d5',
		body: 'Et ut autem. Voluptatem eum dolores sint necessitatibus quos. Quis eum qui dolorem accusantium voluptas voluptatem ipsum. Quo facere iusto quia accusamus veniam id explicabo et aut.',
	},
	{
		id: 3,
		name: 'Dries Vincent',
		date: '4d ago',
		imageId: '1506794778202-cad84cf45f1d',
		body: 'Expedita consequatur sit ea voluptas quo ipsam recusandae. Ab sint et voluptatem repudiandae voluptatem et eveniet. Nihil quas consequatur autem. Perferendis rerum et.',
	},
];
</script>
