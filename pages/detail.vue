<template>
	<div class="min-h-full">
		<main class="py-10">
			<div class="mx-auto mt-8 grid max-w-3xl grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense">
				<div class="space-y-6 lg:col-span-2 lg:col-start-1">
					<!-- Description list -->
					<section aria-labelledby="applicant-information-title">
						<div class="bg-white shadow sm:rounded-lg">
							<div class="px-4 py-5 sm:px-6">
								<h2
									id="applicant-information-title"
									class="text-lg/6 font-medium text-gray-900"
								>
									{{ project.title }}
								</h2>
								<p class="mt-1 max-w-2xl text-sm text-gray-500">
									{{ project.author }} on {{ project.date }}
								</p>
							</div>
							<div class="border-t border-gray-200 px-4 py-5 sm:px-6">
								<dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
									<!-- <div class="sm:col-span-1">
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
									</div> -->
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">
											Description
										</dt>
										<dd class="mt-1 text-sm text-gray-900">
											{{ project.description }}
										</dd>
									</div>
									<div class="sm:col-span-2">
										<dt class="text-sm font-medium text-gray-500">
											Source
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
														<Icon
															name="lucide:github"
															class="size-5 shrink-0 text-gray-400"
															aria-hidden="true"
														/>
														<span class="ml-2 w-0 flex-1 truncate">{{ attachment.name }}</span>
													</div>
													<div class="ml-4 shrink-0">
														<a
															:href="attachment.href"
															class="font-medium text-blue-600 hover:text-blue-500"
														>
															<Icon
																name="lucide:external-link"
																class="w-4 h-4 shrink-0 text-gray-400"
															/>
														</a>
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
import { createPinia } from 'pinia';

import { useProjectStore } from '~/store/project.state';

const pinia = createPinia();

const projectStore = useProjectStore(pinia);

const project = ref(projectStore.getCurrentProject);

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
