import { HttpService } from '../../external/services/http.service';

class ExportService extends HttpService {
	async createExportJob(
		pluginId: string | null,
		format: 'image' | 'pdf',
		width?: number,
		height?: number
	) {
		if (!pluginId) {
			throw new Error('Plugin ID is not defined');
		}
		return await this.makeRequest(
			`/api/v1/plugin/${pluginId}/export?serviceName=${
				this.serviceName
			}&format=${format}${width ? '&width=' + width : ''}${
				height ? '&height=' + height : ''
			}`
		);
	}

	async createExportJobForUrl(params: {
		url: string | null;
		format: 'image' | 'pdf';
		selector?: string;
		selectorType?: string;
		delay?: number;
		width?: number;
		height?: number;
		hideElements?: string[];
	}) {
		const componentType = this.pluginType;
		const {
			url,
			format,
			selector,
			selectorType,
			delay,
			width,
			height,
			hideElements,
		} = params;
		if (!url) {
			throw new Error('URL is not defined');
		}
		return await this.makeRequest(
			`/api/v1/job/exportUrl?serviceName=${
				this.serviceName
			}&format=${format}&url=${encodeURIComponent(
				url
			)}&componentType=${componentType}&selector=${encodeURIComponent(
				selector || ''
			)}&selectorType=${selectorType || ''}&width=${width || ''}&height=${
				height || ''
			}&delay=${delay || ''}&hideElements=${
				hideElements ? hideElements.join(',') : ''
			}`
		);
	}

	async getJobStatus(jobId: number) {
		if (!jobId) {
			throw new Error('Job ID is not defined');
		}
		return await this.makeRequest(
			`/api/v1/job/${jobId}?serviceName=${this.serviceName}`
		);
	}
}

export const exportService = new ExportService();
